defmodule Podium.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias Ecto.Changeset
  alias Podium.Repo
  alias Podium.Accounts.User

  @doc """
  Returns the list of users.

  ## Examples

      iex> list_users()
      [%User{}, ...]

  """
  def list_users do
    Repo.all(User)
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user!(123)
      %User{}

      iex> get_user!(456)
      ** (Ecto.NoResultsError)

  """
  def get_user!(id), do: Repo.get!(User, id)

  @doc """
  Creates a user.

  ## Examples

      iex> create_user(%{field: value})
      {:ok, %User{}}

      iex> create_user(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Changeset.put_change(:password_hash, Bcrypt.hash_pwd_salt(attrs["password"]))
    |> Changeset.put_change(:access_token, generate_token())
    |> Repo.insert()
  end

  @doc """
  Updates a user.

  ## Examples

      iex> update_user(user, %{field: new_value})
      {:ok, %User{}}

      iex> update_user(user, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end
  def update_password(%User{} = user, password) do
    user
    |> User.changeset(%{})
    |> Changeset.put_change(:password_hash, Bcrypt.hash_pwd_salt(password))
    |> Repo.update()
  end

  @doc """
  Deletes a user.

  ## Examples

      iex> delete_user(user)
      {:ok, %User{}}

      iex> delete_user(user)
      {:error, %Ecto.Changeset{}}

  """
  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_user(user)
      %Ecto.Changeset{data: %User{}}

  """
  def change_user(%User{} = user, attrs \\ %{}) do
    User.changeset(user, attrs)
  end

  @doc """
  Checks that a username password combo matches a record in the database
  """
  def login(username, password) do
    case User
    |> Repo.get_by!(username: username)
    |> Bcrypt.check_pass(password) do
      {:ok, user} ->
        update_token(user)
      {:error, reason} ->
        {:error, reason}
    end
  end

  defp generate_token(length \\ 16) do
    :crypto.strong_rand_bytes(length)
    |> Base.encode64
    |> binary_part(0, length)
  end

  def update_token(user) do
    update_user(user, %{"access_token" => generate_token()})
  end

  def check_token(token) do
    Repo.get_by(User, access_token: token)
  end
end
