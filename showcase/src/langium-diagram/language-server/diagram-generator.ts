/********************************************************************************
 * Copyright (c) 2023 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { GeneratorContext, LangiumDiagramGenerator } from 'langium-sprotty';
import { SEdge, SLabel, SModelRoot, SNode, SPort } from 'sprotty-protocol';
import { State, Statemachine, Transition } from './generated/ast';

export class StatesDiagramGenerator extends LangiumDiagramGenerator {

    protected generateRoot(args: GeneratorContext<Statemachine>): SModelRoot {
        const { document } = args;
        const sm = document.parseResult.value;
        return {
            type: 'graph',
            id: sm.name ?? 'root',
            children: [
                ...sm.states.map(s => this.generateNode(s, args)),
                ...sm.states.flatMap(s => s.transitions).map(t => this.generateEdge(t, args))
            ]
        };
    }

    protected generateNode(state: State, { idCache }: GeneratorContext<Statemachine>): SNode {
        const nodeId = idCache.uniqueId(state.name, state);
        return {
            type: 'node',
            id: nodeId,
            size: {width: 100, height: 30},
            cssClasses: ['state'],
            children: [
                <SLabel>{
                    type: 'label',
                    id: idCache.uniqueId(nodeId + '.label'),
                    text: state.name,
                    position: {x:50, y: 15}
                },
                <SPort>{
                    type: 'port',
                    id: idCache.uniqueId(nodeId + '.newTransition')
                }
            ],
            layout: 'stack',
            layoutOptions: {
                paddingTop: 10.0,
                paddingBottom: 10.0,
                paddingLeft: 10.0,
                paddingRight: 10.0
            }
        };
    }

    protected generateEdge(transition: Transition, { idCache }: GeneratorContext<Statemachine>): SEdge {
        const sourceId = idCache.getId(transition.$container);
        const targetId = idCache.getId(transition.state?.ref);
        const edgeId = idCache.uniqueId(`${sourceId}:${transition.event?.ref?.name}:${targetId}`, transition);
        return {
            type: 'edge',
            id: edgeId,
            cssClasses: ['transition'],
            sourceId: sourceId!,
            targetId: targetId!,
            children: [
                <SLabel>{
                    type: 'label:xref',
                    id: idCache.uniqueId(edgeId + '.label'),
                    text: transition.event?.ref?.name,
                    edgePlacement:  {
                        position: 0.5,
                        rotate: true,
                        offset: -2
                    }
                },
                <SLabel> {
                    id: idCache.uniqueId(edgeId + '.arrow'),
                    type: 'label:arrow',
                    text: '',
                    edgePlacement:  {
                        position: 1,
                        side: 'on',
                        rotate: true
                    }
                }
            ]
        };
    }

}
