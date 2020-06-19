defmodule PodiumWeb.UserLive.UserComponent do
  use PodiumWeb, :live_component

  def render(assigns) do
    ~L"""
    <div class="list-row">
      <div class="user-avatar"></div>
      <h6><%= @user.username %></h6>
      <span><%= live_redirect "Show", to: Routes.user_show_path(@socket, :show, @user) %></span>
      <span><%= live_patch "Edit", to: Routes.user_index_path(@socket, :edit, @user) %></span>
      <span><%= link "Delete", to: "#", phx_click: "delete", phx_value_id: @id, data: [confirm: "Are you sure?"] %></span>
    </div>
    """
  end
end
