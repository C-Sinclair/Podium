defmodule PodiumWeb.AuthChannel do
  use Phoenix.Channel

  alias Podium.Accounts

  def join("auth:init", _message, socket) do
    {:ok, socket}
  end

  def handle_in("login", params, socket) do
    case params do
      %{"username" => username, "password" => password} ->
        case Accounts.login(username, password) do
          {:ok, user} ->
            {:reply, {:ok, user}, socket}
          {:error, _reason} ->
            {:reply, {:error, %{message: "Incorrect login"}}, socket}
        end
      %{"token" => token} ->
        case Accounts.check_token(token) do
          {:ok, user} ->
            {:reply, {:ok, user}, socket}
          {:error, _reason} ->
            {:reply, {:error, %{message: "Invalid access token"}}, socket}
        end
      :else ->
        {:noreply, socket}
    end
  end

  def handle_in("register", attrs, socket) do
    case Accounts.create_user(attrs) do
      {:ok, user} ->
        {:reply, {:ok, user}, socket}
      {:error, _reason} ->
        {:reply, {:error, %{message: "Creation failed"}}, socket}
    end
  end
end
