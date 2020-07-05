defmodule PodiumWeb.UserController do
  use PodiumWeb, :controller

  alias Podium.Accounts
  alias Podium.Accounts.User

  def image(conn, %{"user_id" => user_id}) do
    %User{image_url: url} = Accounts.get_user!(user_id)
    if url != nil do
      conn |> fetch_file_from(url)
    else
      conn |> fetch_file_from("https://i.imgflip.com/4/1cf8by.jpg")
    end
  end

  defp fetch_file_from(conn, url) do
    case HTTPoison.get(url) do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        conn
        |> send_resp(:ok, body)
      {:ok, %HTTPoison.Response{status_code: 404}} ->
        IO.puts "Not found :("
      {:error, %HTTPoison.Error{reason: reason}} ->
        IO.inspect reason
    end
  end
end
