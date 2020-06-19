defmodule PodiumWeb.UserLive.Index do
  use PodiumWeb, :live_view

  alias Podium.Chatroom
  alias Podium.Chatroom.User

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket), do: Chatroom.subscribe()

    {:ok, assign(socket, :users, list_users()), temporary_assigns: [users: []]}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit username")
    |> assign(:user, Chatroom.get_user!(id))
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "Pick a username")
    |> assign(:user, %User{})
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Current Users")
    |> assign(:user, nil)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    user = Chatroom.get_user!(id)
    {:ok, _} = Chatroom.delete_user(user)

    {:noreply, assign(socket, :users, list_users())}
  end

  @impl true
  def handle_info({:user_created, user}, socket) do
    {:noreply, update(socket, :users, fn users -> [user | users] end )}
  end
  def handle_info({:user_updated, user}, socket) do
    {:noreply, update(socket, :users, fn users -> [user | users] end )}
  end

  defp list_users do
    Chatroom.list_users()
  end
end
