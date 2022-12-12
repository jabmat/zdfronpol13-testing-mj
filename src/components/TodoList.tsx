interface TodoListProps {
	text: string;
}

export const TodoList = ({ text }: TodoListProps) => {
	return (
		<div>
			<p>Todo List</p>
			<p>{text}</p>
			<button>CLick me</button>
			<button data-testid="clickMe">CLick me</button>
			<button>CLick me 3</button>
		</div>
	);
};
