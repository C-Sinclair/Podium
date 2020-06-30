defmodule Podium.Application do
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      Podium.Repo,
      PodiumWeb.Telemetry,
      {Phoenix.PubSub, name: Podium.PubSub},
      PodiumWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: Podium.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    PodiumWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
