pannellum.viewer('panorama', {
    "default": {
        "firstScene": "main_hall",
        "author": "METABRIX",
        "sceneFadeDuration": 1000,
        "autoLoad": true
    },

    "scenes": {
        "main_hall": {
            "title": "Main Hall",
            "hfov": 160,
            "pitch": 0,
            "yaw": -8.6039,
            "type": "equirectangular",
            "panorama": "./img/tour/hall.jpg",
            "hotSpots": [
                {
                    "pitch": -6.4456,
                    "yaw": 44.6419,
                    "type": "scene",
                    "text": "Master Bedroom",
                    "sceneId": "master_bedroom"
                },
                {
                    "yaw": 127.48,
                    "pitch": -9.310,
                    "type": "scene",
                    "text": "Living Room",
                    "sceneId": "living_room",
                },
                {
                    "yaw": -10.5039,
                    "pitch": -4.5358,
                    "type": "scene",
                    "text": "Balcony",
                    "sceneId": "balcony",
                }
            ]
        },

        "balcony": {
            "title": "Balcony",
            "hfov": 160,
            "yaw": 95,
            "pitch": -5,
            "type": "equirectangular",
            "panorama": "./img/tour/balcony.jpg",
            "hotSpots": [
                {
                    "pitch": -8,
                    "yaw": -134,
                    "type": "scene",
                    "text": "Main Hall",
                    "sceneId": "main_hall",
                }
            ]
        },

        "master_bedroom": {
            "title": "Master Bedroom",
            "hfov": 160,
            "yaw": 176,
            "pitch": -20,
            "type": "equirectangular",
            "panorama": "./img/tour/bedroom.jpg",
            "hotSpots": [
                {
                    "pitch": -8.1167,
                    "yaw": 65.4562,
                    "type": "scene",
                    "text": "Master Bathroom",
                    "sceneId": "master_bathroom",
                },
                {
                    "pitch": -6.2069,
                    "yaw": -61.114,
                    "type": "scene",
                    "text": "Main Hall",
                    "sceneId": "main_hall",
                }
            ]
        },

        "master_bathroom": {
            "title": "Master Bathroom",
            "hfov": 160,
            "yaw": 93,
            "pitch": -83.79,
            "type": "equirectangular",
            "panorama": "./img/tour/master_bathroom.jpg",
            "hotSpots": [
                {
                    "pitch": -5.2519,
                    "yaw": 88.0901,
                    "type": "scene",
                    "text": "Master Bedroom",
                    "sceneId": "master_bedroom",
                    "targetYaw": -95,
                    "targetPitch": 0.6
                }
            ]
        },

        "living_room": {
            "title": "Living Room",
            "hfov": 160,
            "yaw": 176,
            "pitch": -20,
            "type": "equirectangular",
            "panorama": "./img/tour/bedroom.jpg",
            "hotSpots": [
                {
                    "pitch": -6.2069,
                    "yaw": -61.114,
                    "type": "scene",
                    "text": "Main Hall",
                    "sceneId": "main_hall",
                }
            ]
        }
    }
});