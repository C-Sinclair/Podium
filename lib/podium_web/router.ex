defmodule PodiumWeb.Router do
  use PodiumWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :put_root_layout, {PodiumWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :put_user_token
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PodiumWeb do
    pipe_through :api

    get "/user/:user_id/image", UserController, :image
  end

  scope "/", PodiumWeb do
    pipe_through :browser

    get "/*path", UIController, :index
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
