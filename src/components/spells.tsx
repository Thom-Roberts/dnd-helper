import React, { SyntheticEvent } from 'react';
import spells from '../files/dnd-spells';
import { Button, Dropdown, Table, } from 'semantic-ui-react';


export default function Spells(props: any) {
    const [ filter, setFilter ] = React.useState('');

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

    function handleChange(e: SyntheticEvent, { value }: any) {
        setFilter(value);
    } 

    return (
        <div>
            <div>
                <Dropdown
                    onChange={handleChange}
                    options={classOptions}
                    placeholder='Filter by class'
                    selection
                    value={filter}
                />
                <Button onClick={() => setFilter('')}>
                    Clear
                </Button>
            </div>
            <div>
                <Table striped celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Spell Name</Table.HeaderCell>
                            <Table.HeaderCell>Class</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
							{
								spells.map(spell => {
									return(
										<Table.Row>
											<Table.Cell>{spell.name}</Table.Cell>
											<Table.Cell>{spell.class.join(', ')}</Table.Cell>
										</Table.Row>
									);
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