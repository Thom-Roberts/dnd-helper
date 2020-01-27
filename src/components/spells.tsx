import React, { useState, SyntheticEvent } from 'react';
import spells from '../files/dnd-spells';
import { Button, Dropdown, Modal, Table, } from 'semantic-ui-react';


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

                        </Table.Row>
                    </Table.Header>
                </Table>
            </div>
        </div>
    );
}