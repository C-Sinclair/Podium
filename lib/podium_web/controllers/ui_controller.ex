defmodule PodiumWeb.UIController do
  use PodiumWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
