defmodule PodiumWeb.UserSocket do
  use Phoenix.Socket

  @impl true
  def connect(_params, socket, _connect_info) do
    {:ok, socket}
  end
  @impl true
  def connect(%{"token" => token}, socket) do
    # max_age: 1209600 is equivalent to two weeks in seconds
    case Phoenix.Token.verify(socket, "user socket", token, max_age: 1209600) do
      {:ok, user_id} ->
        {:ok, assign(socket, :user, user_id)}
      {:error, _reason} ->
        :error
    end
  end


  @impl true
  def id(_socket), do: nil
end
