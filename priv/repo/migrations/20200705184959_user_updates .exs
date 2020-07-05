defmodule Elixir.Podium.Repo.Migrations.UserUpdates do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :password_hash, :string
      add :access_token, :string
    end
  end
end
