import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '/node_modules/@photo-sphere-viewer/core/index.css';
function MySphereViewer() {
    const viewerRef = useRef(null);
    const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
    useEffect(() => {
        const viewer = new Viewer({
            container: viewerRef.current,
            panorama: baseUrl + 'sphere.jpg',
            caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
            loadingImg: baseUrl + 'loader.gif',
            touchmoveTwoFingers: true,
            mousewheelCtrlKey: true,
        });

        return () => {
            viewer.destroy();
        };
    }, []);

    return (
        <div>
            <div>cs</div>
            <div ref={viewerRef} style={{ width: '100%', height: '100vh' }} />
        </div>
    );
}

export default MySphereViewer;