import React from 'react';
import Navbar from '../../../src/components/navbar_analytics/index';
import styles from '../analytics/index.module.css';

const AnalyticsPage: React.FC = () => {
    const [mapNo, setMapNo] = React.useState(0);

    const renderMap = () => {
        if (mapNo === 0) {
            return (
                <iframe 
                    src="https://www.google.com/maps/d/u/0/embed?mid=1-X2hHZ7X_pai2ETudwiUxlK_CfLhT4s&ehbc=2E312F" 
                ></iframe>
            );
        } else if (mapNo === 1) {
            return (
                <iframe 
                    src="https://www.google.com/maps/d/embed?mid=1UntYNVwXcmfXFarG6XNZo9us7fwYO2w&ehbc=2E312F"
                ></iframe>
            );
        } else if (mapNo === 2) {
            return (
                <iframe 
                    src="https://www.google.com/maps/d/embed?mid=1jBnJvq7Gdg-_thAz7L380Ug1TCdl-BQ&ehbc=2E312F"
                ></iframe>
            );
        } else {
            return null;
        }
    };

    const handleMapChange = (mapNumber: number) => {
        setMapNo(mapNumber);
    };

    return (
        <div className={styles.analyticsPage}>
            <Navbar handleMapChange={handleMapChange}/>
            <div className={styles.mapContainer}>
                {renderMap()}
            </div>
        </div>
    );
};

export default AnalyticsPage;
