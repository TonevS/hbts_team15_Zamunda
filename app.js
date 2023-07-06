console.log('test');
// Your access token can be found at: https://ion.cesium.com/tokens.
// This is the default access token from your ion account

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNmE3MGUwMC0xZTFlLTRjNzUtYjRiZi0xMTg4NmRkMWFkMmUiLCJpZCI6MTUxOTAwLCJpYXQiOjE2ODg2NDM5NzV9.R_qSu5vM04YAu20SES8mNMhc_gxaoW1B2wPqP_cbr4I';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer("cesiumContainer", {
    globe: false,
});
try {
        const tileset = await Cesium.createGooglePhotorealistic3DTileset();
        viewer.scene.primitives.add(tileset);
    } catch (error) {
        console.log(`Failed to load tileset: ${error}`);
    }

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
    //42.43278 25.64194
    destination: Cesium.Cartesian3.fromDegrees(3.7989, 51.3691, 500),
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-35.0),
    }
});


viewer.animation.container.style.visibility = 'hidden';
viewer.timeline.container.style.visibility = 'hidden';
viewer.forceResize();
// Add Cesium OSM Buildings, a global 3D buildings layer.
// const buildingTileset = await Cesium.createOsmBuildingsAsync();
// viewer.scene.primitives.add(buildingTileset);   