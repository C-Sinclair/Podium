defmodule Podium.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :username, :string
    field :password_hash, :string
    field :password, :string, virtual: true
    field :access_token, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :password, :access_token])
    |> unique_constraint(:username)
    |> validate_required([:username])
    |> validate_length(:password, min: 5)
  end
end
