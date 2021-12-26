import React from "react";
import {
  render,
  fireEvent,
  cleanup
} from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("is date validation working", async () => {
  const { 
      getByTestId, debug
     } = render(
    <createApolloMockedProvider>
      <App />
    </createApolloMockedProvider>
  );

  const startDate = getByTestId("startDate");
  const endDate = getByTestId("endDate");
  const searchButton = getByTestId("searchButton");
  fireEvent.click(searchButton);
  debug();
  fireEvent.change(startDate, { target: { value: '2020-05-12'} });
  fireEvent.change(endDate, { target: { value: '2020-06-12' } });
  fireEvent.click(searchButton);
  debug();

});