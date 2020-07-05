defmodule PodiumWeb.ChatChannel do
  use Phoenix.Channel

  def join("chat:" <> chat_id, _message, socket) do
    {:ok, assign(socket, :chat_id, chat_id)}
  end

  def handle_in("message", %{"body" => body}, socket) do
    broadcast_from! socket, "message", %{message: body}
    {:noreply, socket}
  end
end
