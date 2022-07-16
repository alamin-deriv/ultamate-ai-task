import { render, screen } from '@testing-library/react';
import PretrainedIntents from './../index';
import IntentsData from "../../../config/intents.json";


 

test('renders filter message', () => {
  render(<PretrainedIntents IntentsData={IntentsData} />);
  const element = screen.getByText("Pre trained intents");
  expect(element).toBeInTheDocument();
});

test('renders search input', () => {
  render(<PretrainedIntents IntentsData={IntentsData} />);
  const element = screen.queryAllByText("search-input");
  expect(element).toBeTruthy();
});

test('renders Next Page Button', () => {
  render(<PretrainedIntents IntentsData={IntentsData}/>);
  const element = screen.getByTestId("next-button");
  expect(element).toBeInTheDocument();
});

test('renders Data Table', () => {
  render(<PretrainedIntents IntentsData={IntentsData}/>);
  const element = screen.getByTestId("data-table");
  expect(element).toBeInTheDocument();
});

test('display atleast one of the intents', () => {
  render(<PretrainedIntents IntentsData={IntentsData}/>);
  const element = screen.getByText("Greeting");
  expect(element).toBeInTheDocument();
});

test('renders empty state', () => {
  render(<PretrainedIntents IntentsData={[]}/>);
  const element = screen.getByText("No records");
  expect(element).toBeInTheDocument();
});



