defmodule Podium.Repo.Migrations.CreateVideos do
  use Ecto.Migration

  def change do
    create table(:videos) do
      add :name, :string

      timestamps()
    end

  end
end
