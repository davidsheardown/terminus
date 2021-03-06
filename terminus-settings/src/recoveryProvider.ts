import { Injectable } from '@angular/core'
import { TabRecoveryProvider, RecoveredTab } from 'terminus-core'

import { SettingsTabComponent } from './components/settingsTab.component'

@Injectable()
export class RecoveryProvider extends TabRecoveryProvider {
    async recover (recoveryToken: any): Promise<RecoveredTab> {
        if (recoveryToken.type === 'app:settings') {
            return { type: SettingsTabComponent }
        }
        return null
    }
}
