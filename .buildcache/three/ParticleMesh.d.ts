export declare function createParticleMesh(options: any): any;
export declare function updateGeometry(geometry: any, config: any): void;
export declare function updateMaterial(material: any, config: any): void;
export declare function updateOriginalMaterialUniforms(material: any): void;
export declare function setMaterialTime(material: any, time: any): void;
export declare function loadTexturePackerJSON(mesh: any, config: any, startIndex: any, endIndex: any): any;
export declare function setTextureAtlas(material: any, atlasJSON: any): void;
export declare function setMatrixAt(geometry: any, i: any, mat4: any): void;
export declare function setOffsetAt(geometry: any, i: number, x: number, y?: number, z?: number): void;
export declare function setColorsAt(geometry: any, i: any, colorArray: any): void;
export declare function setOpacitiesAt(geometry: any, i: any, opacityArray: any): void;
export declare function setTimingsAt(geometry: any, i: any, spawnTime: any, lifeTime: any, repeatTime: any, seed?: number): void;
export declare function setFrameAt(geometry: any, i: any, atlasIndex: any, frameStyle: any, startFrame: any, endFrame: any, cols: any, rows: any): void;
export declare function setAtlasIndexAt(geometry: any, i: any, atlasIndex: any): void;
export declare function setScalesAt(geometry: any, i: any, scaleArray: any): void;
export declare function setOrientationsAt(geometry: any, i: any, orientationArray: any, worldUp?: number): void;
export declare function setVelocityAt(geometry: any, i: any, x: any, y: any, z: any, radial?: number): void;
export declare function setAccelerationAt(geometry: any, i: any, x: any, y: any, z: any, radial?: number): void;
export declare function setAngularVelocityAt(geometry: any, i: any, x: any, y: any, z: any, orbital?: number): void;
export declare function setAngularAccelerationAt(geometry: any, i: any, x: any, y: any, z: any, orbital?: number): void;
export declare function setWorldAccelerationAt(geometry: any, i: any, x: any, y: any, z: any): void;
export declare function setBrownianAt(geometry: any, i: any, brownianSpeed: any, brownianScale: any): void;
export declare function setVelocityScaleAt(geometry: any, i: any, velocityScale: any, velocityMin: any, velocityMax: any): void;
export declare function setKeyframesAt(attribute: any, i: any, valueArray: any, defaultValue: any): void;
export declare function needsUpdate(geometry: any, attrs?: any): void;
