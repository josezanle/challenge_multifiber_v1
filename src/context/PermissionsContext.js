import React, { createContext, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from 'react-native-permissions';


export const permissionInitState = {
    locationStatus: 'unavailable',
}


export const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {

    const [permissions, setPermissions] = useState(permissionInitState);

    useEffect(() => {

        checkLocationPermission();

        AppState.addEventListener('change', state => {
            if (state !== 'active') return;
            checkLocationPermission();
        });

    }, [])


    const askLocationPermission = async () => {

        let permissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if (permissionStatus === 'blocked') {
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        });

    }

    const checkLocationPermission = async () => {
        let permissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        });
    }




    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission,
        }}>
            {children}
        </PermissionsContext.Provider>
    )

}


