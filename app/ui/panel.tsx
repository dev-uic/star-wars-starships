import styles from './panel.module.scss';

interface PanelProps {
    children: React.ReactNode;
}

const Panel = ({ children }: PanelProps) => {
    return (
        <div className="content">
            <div className={styles.panel}>{children}</div>
        </div>
    );
};

export default Panel;
