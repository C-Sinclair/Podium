import React from 'react'
import { Component } from 'react'
import { WorkspaceProps, WorkspaceState } from '../types/props'

class Workspace extends Component<WorkspaceProps, WorkspaceState> {

    render() {
        return (
            <div>
                <strong>Workspace</strong>
            </div>
        )
    }
}

export default Workspace
