import React from 'react';
import { Modal } from 'semantic-ui-react';

interface SpellModalProps {
    shouldOpen: boolean;
    closeFunction: Function;
    spellInfo: any;
}

export default function SpellDetails(props: SpellModalProps) {
    return (
        <Modal
            open={props.shouldOpen}
            onClose={() => props.closeFunction()}
            closeOnDimmerClick={true}
        >
            <Modal.Content>
                {props.spellInfo !== undefined && 
                <React.Fragment>
                    {props.spellInfo.name}
                </React.Fragment>
                }
            </Modal.Content>
        </Modal>
    );
}