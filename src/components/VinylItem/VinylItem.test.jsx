import { describe, it, expect, vi } from "vitest";
import VinylItem from "./VinylItem.jsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
const vinyl = {
  id: 9287809,
  artist: "Pink Floyd",
  title: "The Dark Side Of The Moon",
  genre: { title: "Rock" },
  styles: ["Prog Rock", "Psychedelic Rock", "Classic Rock"],
  year: 2016,
  country: "europe",
  thumb_image:
    "https://i.discogs.com/sVLIxn9GSzw4lpSDt2YnmRMfTbMN1CrAkfjo0M7-ckk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkyODc4/MDktMTQ3OTc1MzIz/Ni05NjE3LmpwZWc.jpeg",
};

describe("<VinylItem />", () => {
  it("Test vinyl description", () => {
    const toggleCollection = vi.fn();
    const toggleFavorite = vi.fn();
    const setOpenedVinylId = vi.fn();
    const IntersectionObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
    render(
      <VinylItem
        vinyl={vinyl}
        toggleCollection={toggleCollection}
        toggleFavorite={toggleFavorite}
        setOpenedVinylId={setOpenedVinylId}
        wishList={true}
        collectionList={true}
      />
    );
    const artist = screen.queryByText("Pink Floyd");
    const title = screen.queryByText("The Dark Side Of The Moon");
    const genre = screen.queryByText("Rock");
    const country = screen.queryByText("europe");
    const year = screen.queryByText("2016");
    const img = screen.getByAltText("Thumb");
    expect(artist).not.toBeNull();
    expect(title).not.toBeNull();
    expect(genre).not.toBeNull();
    expect(country).not.toBeNull();
    expect(year).not.toBeNull();
    expect(img).toHaveAttribute("src", expect.stringMatching(/\S+/));
  });
  it("Testing toggle favorite", async () => {
    const toggleCollection = vi.fn();
    const toggleFavorite = vi.fn();
    const setOpenedVinylId = vi.fn();
    const IntersectionObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
    render(
      <VinylItem
        vinyl={vinyl}
        toggleCollection={toggleCollection}
        toggleFavorite={toggleFavorite}
        setOpenedVinylId={setOpenedVinylId}
        wishList={true}
        collectionList={true}
      />
    );
    const favorite = screen.getByTestId("favorite");
    await userEvent.click(favorite);
    // screen.debug();
    expect(toggleFavorite).toHaveBeenCalledOnce();
    expect(toggleFavorite).toBeCalledWith(vinyl);
  });
  it("Testing toggles collection", async () => {
    const toggleCollection = vi.fn();
    const toggleFavorite = vi.fn();
    const setOpenedVinylId = vi.fn();
    const IntersectionObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
    render(
      <VinylItem
        vinyl={vinyl}
        toggleCollection={toggleCollection}
        toggleFavorite={toggleFavorite}
        setOpenedVinylId={setOpenedVinylId}
        wishList={true}
        collectionList={true}
      />
    );
    const removeCollection = screen.getByTestId("removeCollection");
    await userEvent.click(removeCollection);
    // screen.debug();
    expect(toggleCollection).toHaveBeenCalledOnce();
    expect(toggleCollection).toBeCalledWith(vinyl);
  });
});
