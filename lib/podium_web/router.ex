defmodule PodiumWeb.Router do
  use PodiumWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {PodiumWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :put_user_token
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PodiumWeb do
    pipe_through :browser

    live "/", RoomLive.Index, :index
  end

  scope "/rooms", PodiumWeb do
    pipe_through :browser

    live "/", RoomLive.Index, :index
    live "/new", RoomLive.Index, :new
    live "/:id/edit", RoomLive.Index, :edit

    live "/:id", RoomLive.Show, :show
    live "/:id/show/edit", RoomLive.Show, :edit
  end

  scope "/users", PodiumWeb do
    pipe_through :browser

    live "/", UserLive.Index, :index
    live "/new", UserLive.Index, :new
    live "/:id/edit", UserLive.Index, :edit

    live "/:id", UserLive.Show, :show
    live "/:id/show/edit", UserLive.Show, :edit
  end

  scope "/videos", PodiumWeb do
    pipe_through :browser

    live "/", VideoLive.Index, :index
    live "/:id", VideoLive.Show, :show
  end

  defp put_user_token(conn, _) do
    if current_user = conn.assigns[:current_user] do
      token = Phoenix.Token.sign(conn, "user socket", current_user.id)
      assign(conn, :user_token, token)
    else
      conn
    end
  end
end
