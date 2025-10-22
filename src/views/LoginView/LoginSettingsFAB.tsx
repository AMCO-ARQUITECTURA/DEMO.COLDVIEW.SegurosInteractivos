import Icon from '@/components/Icon/Icon';
import './LoginView.css';
import { useState } from 'react';
import useVersionStore from '@/store/VersionStore';
import { Dropdown } from 'primereact/dropdown';

const LoginVersionSelectorFAB = () => {
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const { version, setVersion } = useVersionStore();
    const versionOptions = [
        {
            label: "Argentina",
            value: "ar"
        },
        {
            label: "Chile",
            value: "ch"
        },
        {
            label: "Mexico",
            value: "mx"
        }
    ]

    const changeVersion = (newVersion: 'mx' | 'ar' | 'ch') => {
        setVersion(newVersion);
        setPopupVisible(false);
    }

    return (
        <>
            {popupVisible && (
                <div className='login-settings-fab-popup'>
                    <label>Version - Region</label>
                    <Dropdown options={versionOptions} onChange={(selectedOption) => changeVersion(selectedOption.value)} value={version} placeholder='Selecciona la version a utilizar...'/>
                </div>
            )}
            <button className="login-settings-fab" onClick={() => setPopupVisible(!popupVisible)}>
                <Icon type="primeicon" primeicon="pi pi-cog" iconClassname='login-settings-fab-icon'/>
            </button>
        </>
    );
}

export default LoginVersionSelectorFAB;