import React from 'react'
import BackArrow from './BackArrow'
import Edit from './Edit'
import Logout from './Logout'
import Menu from './Menu'
import Search from './Search'
import ShareApp from './ShareApp'

export const Icon = ({ name, size, color }) => {

    let defaultSize = size || 20
    let fill = color || "silver"

    switch (name) {
        case "menu":
            return <Menu size={defaultSize} color={fill} />

        case "share":
            return <ShareApp size={defaultSize} color={fill} />

        case "search":
            return <Search size={defaultSize} color={fill} />

        case "logout":
            return <Logout size={defaultSize} color={fill} />

        case "back-arrow":
            return <BackArrow size={defaultSize} color={fill} />

        case "edit":
            return <Edit size={defaultSize} color={fill} />
    }
}