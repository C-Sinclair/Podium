defmodule Podium.Recording.Video do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:name]}

  schema "videos" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(video, attrs) do
    video
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
