defmodule Podium.RecordingTest do
  use Podium.DataCase

  alias Podium.Recording

  describe "videos" do
    alias Podium.Recording.Video

    @valid_attrs %{name: "some name"}
    @update_attrs %{name: "some updated name"}
    @invalid_attrs %{name: nil}

    def video_fixture(attrs \\ %{}) do
      {:ok, video} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Recording.create_video()

      video
    end

    test "list_videos/0 returns all videos" do
      video = video_fixture()
      assert Recording.list_videos() == [video]
    end

    test "get_video!/1 returns the video with given id" do
      video = video_fixture()
      assert Recording.get_video!(video.id) == video
    end

    test "create_video/1 with valid data creates a video" do
      assert {:ok, %Video{} = video} = Recording.create_video(@valid_attrs)
      assert video.name == "some name"
    end

    test "create_video/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Recording.create_video(@invalid_attrs)
    end

    test "update_video/2 with valid data updates the video" do
      video = video_fixture()
      assert {:ok, %Video{} = video} = Recording.update_video(video, @update_attrs)
      assert video.name == "some updated name"
    end

    test "update_video/2 with invalid data returns error changeset" do
      video = video_fixture()
      assert {:error, %Ecto.Changeset{}} = Recording.update_video(video, @invalid_attrs)
      assert video == Recording.get_video!(video.id)
    end

    test "delete_video/1 deletes the video" do
      video = video_fixture()
      assert {:ok, %Video{}} = Recording.delete_video(video)
      assert_raise Ecto.NoResultsError, fn -> Recording.get_video!(video.id) end
    end

    test "change_video/1 returns a video changeset" do
      video = video_fixture()
      assert %Ecto.Changeset{} = Recording.change_video(video)
    end
  end
end
