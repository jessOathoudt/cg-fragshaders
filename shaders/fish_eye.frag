#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main()
{
vec2 texcoord = (texcoord * 2.0f) - 1.0f;
float mag = length(texcoord);
float radius = pow(mag, 1.5);
float theta = atan(texcoord.y, texcoord.x);
texcoord.x = radius*cos(theta);
texcoord.y = radius*sin(theta);
texcoord = (texcoord+1.0f)/2.0f;
FragColor = texture(image, texcoord);
}
