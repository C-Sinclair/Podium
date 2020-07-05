defmodule PodiumWeb.AuthChannel do
  use Phoenix.Channel

  def join("auth:init", _message, socket) do
    {:ok, socket}
  end

  def handle_in("login", %{"username" => username, "password" => password}, socket) do
    case password do
      "parkrangery" ->
        {:reply, {:ok, %{username: username}}, socket}
      :else ->
        {:reply, {:error, %{message: "Incorrect login"}}, socket}
    end
  end
end
