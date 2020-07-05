defmodule PodiumWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:admin", _message, socket) do
    {:ok, socket}
  end

  def handle_in("create", %{"body" => body}, socket) do
    broadcast_from! socket, "create", %{room: body}
    {:noreply, socket}
  end
end
