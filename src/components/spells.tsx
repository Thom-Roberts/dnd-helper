import React, { SyntheticEvent } from 'react';
import spells from '../files/dnd-spells';
import { Button, Dropdown, Table, } from 'semantic-ui-react';


export default function Spells(props: any) {
	const [ classFilter, setClassFilter ] = React.useState('');
	const [ levelFilter, setLevelFilter ] = React.useState(0);

	const classOptions = [
		{ key: 'Barbarian', value: 'Barbarian', text: 'Barbarian' },
		{ key: 'Bard', value: 'Bard', text: 'Bard' },
		{ key: 'Cleric', value: 'Cleric', text: 'Cleric' },
		{ key: 'Druid', value: 'Druid', text: 'Druid' },
		{ key: 'Fighter', value: 'Fighter', text: 'Fighter' },
		{ key: 'Monk', value: 'Monk', text: 'Monk' },
		{ key: 'Paladin', value: 'Paladin', text: 'Paladin' },
		{ key: 'Ranger', value: 'Ranger', text: 'Ranger' },
		{ key: 'Rogue', value: 'Rogue', text: 'Rogue' },
		{ key: 'Sorcerer', value: 'Sorcerer', text: 'Sorcerer' },
		{ key: 'Warlock', value: 'Warlock', text: 'Warlock' },
		{ key: 'Wizard', value: 'Wizard', text: 'Wizard' },
	];

	const levelOptions = [
		{ key: '1', value: 1, text: '1' },
		{ key: '2', value: 2, text: '2' },
		{ key: '3', value: 3, text: '3' },
		{ key: '4', value: 4, text: '4' },
		{ key: '5', value: 5, text: '5' },
		{ key: '6', value: 6, text: '6' },
		{ key: '7', value: 7, text: '7' },
		{ key: '8', value: 8, text: '8' },
		{ key: '9', value: 9, text: '9' },
	]

	function handleClassChange(e: SyntheticEvent, { value }: any) {
		setClassFilter(value);
	}

	function handleLevelChange(e: SyntheticEvent, { value }: any) {
		setLevelFilter(value);
	}

	return (
		<div>
			<div>
					<Dropdown
						onChange={handleClassChange}
						options={classOptions}
						placeholder='Filter by class'
						selection
						search
						value={classFilter}
					/>
					<Button onClick={() => setClassFilter('')}>
						Clear
					</Button>
					<Dropdown
						onChange={handleLevelChange}
						options={levelOptions}
						placeholder='Filter by level'
						selection
						search
						value={levelFilter > 0 ? levelFilter : 'None'}
					/>
			</div>
			<div>
					<Table striped celled>
						<Table.Header>
							<Table.Row>
									<Table.HeaderCell>Spell Name</Table.HeaderCell>
									<Table.HeaderCell>Class</Table.HeaderCell>
									<Table.HeaderCell>Min. Level</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
						{
							spells.map(spell => {
								if(spell.level >= levelFilter && (classFilter === '' || spell.class.includes(classFilter))) {
									return(
										<Table.Row>
											<Table.Cell>{spell.name}</Table.Cell>
											<Table.Cell>{spell.class.join(', ')}</Table.Cell>
											<Table.Cell>{spell.level}</Table.Cell>
										</Table.Row>
									);
								}
								else {
									return <React.Fragment></React.Fragment>
								}
							})
						}
							<Table.Row>
									<Table.Cell></Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
			</div>
		</div>
	);
}