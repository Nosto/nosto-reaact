import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  NostoProvider,
  NostoCategory,
  NostoPlacement,
  RecommendationComponentType,
} from "../src/index.client";

const RecommendationComponent: RecommendationComponentType = ({
  nostoRecommendation,
}) => {
  return (
    <div className="nosto-list" data-testid="recommendation">
      {nostoRecommendation?.products.map((product, i) => (
        <div key={i} data-testid="recommendation-product">
          <div data-testid="recommendation-product-name">{product.name}</div>
        </div>
      ))}
    </div>
  );
};

test("Category page render", async () => {
  render(
    <NostoProvider
      account="shopify-11368366139"
      recommendationComponent={<RecommendationComponent />}
    >
      <>
        <NostoPlacement id="categorypage-nosto-1" />
        <NostoPlacement id="categorypage-nosto-2" />
        <NostoCategory category="Rings" />
      </>
    </NostoProvider>
  );

  await waitFor(() => {
    expect(screen.getAllByTestId("recommendation")).toHaveLength(2);
  });

  screen.logTestingPlaygroundURL();

  expect(
    screen.getAllByTestId("recommendation-product").length
  ).toBeGreaterThanOrEqual(3);

  screen.getAllByTestId("recommendation-product-name").forEach((el) => {
    expect(el.textContent?.trim().length).toBeGreaterThan(5);
  });
});
