import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

const setup = () => render(<TodoList text="mockTest" />);

// beforeEach - renderowanie tego samego
beforeEach(() => {});

// wszystkie testy będą dotyczyć 'TodoList.tsx', bo jest w 'describe'
describe('TodoList.tsx', () => {
	test('title is rednered', () => {
		// tworzymy komponent do testowania najpierw
		render(<TodoList text="test" />);

		// chcemy zobaczyć czy jest title (logika testu)
		// const title = screen.getByText('Todo List');
		const title = screen.getByText('Todo List');

		// sprawdzenie testu
		// expect(title).toBeInTheDocument();
		// expect(title.innerHTML).toEqual('Todo List');
		expect(title.innerHTML).toEqual('Todo List');
	});

	test('textProp is rendered', () => {
		render(<TodoList text="mockTest" />);
		const textProp = screen.getByText('mockTest');
		expect(textProp.innerHTML).toEqual('mockTest');
	});

	test('button is rendered', () => {
		render(<TodoList text="mockTest" />);
		const buttons = screen.getAllByRole('button');
		expect(buttons.length).toEqual(3);
	});

	test('button is rendered', () => {
		render(<TodoList text="mockTest" />);
		const clickMeButton = screen.getByTestId('clickMe');
		expect(clickMeButton).toBeInTheDocument();
	});
});
