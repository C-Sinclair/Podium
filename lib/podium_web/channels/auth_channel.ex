defmodule PodiumWeb.AuthChannel do
  use Phoenix.Channel

  alias Podium.Accounts

  def join("auth:init", _message, socket) do
    {:ok, socket}
  end

  def handle_in("login", %{"username" => username, "password" => password}, socket) do
    case Accounts.login(username, password) do
      {:ok, user} ->
        {:reply, {:ok, user}, socket}
      {:error, _reason} ->
        {:reply, {:error, %{message: "Incorrect login"}}, socket}
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
