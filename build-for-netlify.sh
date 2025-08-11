#!/bin/bash
# Build script for Netlify deployment

echo "Building Pocket Lawyer for Netlify deployment..."

# Run the standard build
npm run build

# Copy redirects file to build output
cp public/_redirects dist/public/_redirects

echo "Build completed successfully!"
echo "Deploy directory: dist/public"
echo "Functions directory: netlify/functions"