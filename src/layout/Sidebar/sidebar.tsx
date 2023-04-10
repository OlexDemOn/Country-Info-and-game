import { useState, useEffect } from 'react'
import { Children, MenuProps, SidebarProps } from './sidebar.props';
import styles from './sidebar.module.scss';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'
const menuItems: MenuProps[] = [
    {
        name: "Search country",
        link: '/',
        isActive: false,
    },
    {
        name: "Games",
        link: '/games',
        isActive: false,
        children: [
            { name: "Quiz game", isActive: false, link: '/games/quizGame', },
            { name: "Random facts", isActive: false, link: '/games/randomFactsGame', },
            { name: "Flags game", isActive: false, link: '/games/flagsGame', },
        ],
    },
    {
        name: "About us",
        link: '/about_us',
        isActive: false,
        children: [
            { name: "Info about project", isActive: false, link: '/about_us/info', },
            { name: "Contact", isActive: false, link: '/about_us/contact', },
        ],
    },
]

export default function Sidebar({ className, ...props }: SidebarProps): JSX.Element {

    const [menuList, setMenuList] = useState(menuItems);

    const navigate = useNavigate();
    const location = useLocation();

    const ChangeRoute = (link: string) => {
        navigate(link);
    }

    useEffect(() => {
        menuItems.forEach((menuItem: MenuProps) => {
            menuItem.isActive = menuItem.link === location.pathname && true;
            menuItem.children && menuItem.children.forEach((children: Children) => {
                if (children.link === location.pathname) {
                    console.log("ACTIVE");
                    menuItem.isActive = true;
                    children.isActive = true;
                    return
                }
                else {
                    children.isActive = false;

                }
            })
        })
        setMenuList([...menuItems])
    }, [location]);

    const firstLayer = (): JSX.Element => {
        return (
            <div className={styles.menu_block}>
                {menuList.map((menuItem: MenuProps) =>
                    <div key={menuItem.name}
                        className={cn(styles.first_layer, {
                            [styles.first_layerOpened]: menuItem.isActive
                        })}
                    >
                        <AnimatePresence>
                            <span onClick={() => ChangeRoute(menuItem.link)}>{menuItem.name}</span>
                            {menuItem?.children && menuItem.isActive && secondLayer(menuItem)}
                        </AnimatePresence>
                    </div>)}
            </div>
        )
    }

    const secondLayer = (menuItem: MenuProps) => {
        return (
            <motion.div key={menuItem.name} className={styles.second_layer}
                initial={{ height: 0, margin: 0 }}
                animate={{ height: "auto", margin: "15px 0" }}
                exit={{ height: 0, margin: 0 }}
            >
                {menuItem.children!.map((m: any) =>
                    <div key={m.name} className={cn(styles.second_layer_item, {
                        [styles.second_layer_itemOpened]: m.isActive
                    })}>
                        <span onClick={() => navigate(m.link)}>{m.name}</span>
                    </div>)
                }
            </motion.div>
        )
    }
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            {menuList && firstLayer()}
        </div>
    )
}