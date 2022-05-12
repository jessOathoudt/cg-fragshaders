#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    vec3 L = vec3(0.299, 0.587, 0.114);
    FragColor = vec4(vec3(dot(color.rgb, L)), color.a);
}
