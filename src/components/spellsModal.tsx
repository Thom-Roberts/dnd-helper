import React from 'react';
import { Modal } from 'semantic-ui-react';

interface SpellModalProps {
    shouldOpen: boolean;
    closeFunction: Function;
    spellInfo: any; // Maybe I'll change this type once I figure out the exact type of this interface
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
                        <div>
                           {props.spellInfo.name}
                        </div>
                        <div style={{paddingTop: '10px',}}>
                            Requires: {props.spellInfo.casting_time}
                        </div>
                        <div style={{paddingTop: '10px',}}>
                            {props.spellInfo.desc}
                        </div>
                        <div style={{paddingTop: '10px',}}>
                        {props.spellInfo.higher_level ? props.spellInfo.higher_level : ''}
                        </div>
                    </React.Fragment>
                }
            </Modal.Content>
        </Modal>
    );
}