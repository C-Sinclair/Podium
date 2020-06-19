defmodule Podium.Repo do
  use Ecto.Repo,
    otp_app: :podium,
    adapter: Ecto.Adapters.Postgres
end
