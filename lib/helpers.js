import { buildUrl } from "cloudinary-build-url";

export function blurredImage(publicId) {
    return buildUrl(publicId, {
        cloud: {
            cloudName: 'unnatural',
        },
        transformations: {
            resize: {
                type: 'scale',
                width: 4,
                height: 4,
            }
        }
    })
}
