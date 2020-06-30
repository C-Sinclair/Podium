defmodule PodiumWeb.VideoLive.Index do
  use PodiumWeb, :live_view

  alias Podium.Recording
  alias Podium.Recording.Video

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, :videos, list_videos())}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Video")
    |> assign(:video, Recording.get_video!(id))
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Video")
    |> assign(:video, %Video{})
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Videos")
    |> assign(:video, nil)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    video = Recording.get_video!(id)
    {:ok, _} = Recording.delete_video(video)

    {:noreply, assign(socket, :videos, list_videos())}
  end

  defp list_videos do
    Recording.list_videos()
  end
end
