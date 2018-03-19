# TurtleNode.io

This repository contains the source code for the TurtleNode.io website.

It is designed to work hand in hand with the following additional service.

* https://github.com/brandonlehmann/turtlecoin-api-proxy

## To Use

To use this site edit ``js/main.min.js`` to reflect your API interface or use my public API proxy.

You can then update the list of nodes to show on the site in ``js/main.min.js`` in the section for the nodes.

```javascript
const nodes = [
  { name: 'US-East-1', hostname: 'node-1.nyc.turtlenode.io', port: 11898, region: 'US East' },
  { name: 'US-East-2', hostname: 'node-2.nyc.turtlenode.io', port: 11898, region: 'US East' },
  { name: 'US-East-3', hostname: 'node-3.nyc.turtlenode.io', port: 11898, region: 'US East' },
  { name: 'US-West-1', hostname: 'node-1.sfo.turtlenode.io', port: 11898, region: 'US West' },
  { name: 'US-West-2', hostname: 'node-2.sfo.turtlenode.io', port: 11898, region: 'US West' },
  { name: 'US-West-3', hostname: 'node-3.sfo.turtlenode.io', port: 11898, region: 'US West' },
  { name: 'EU-AMS-1', hostname: 'node-1.ams.turtlenode.io', port: 11898, region: 'Europe' },
  { name: 'EU-AMS-2', hostname: 'node-2.ams.turtlenode.io', port: 11898, region: 'Europe' },
  { name: 'EU-AMS-3', hostname: 'node-3.ams.turtlenode.io', port: 11898, region: 'Europe' }
]
```

## Development

You can find me on the TurtleCoin discord at http://chat.turtlecoin.lol/ as @iburnmycd

### Donations

I'll kindly accept your donation in [TRTL] if you love this project.

TRTLv1pacKFJk9QgSmzk2LJWn14JGmTKzReFLz1RgY3K9Ryn7783RDT2TretzfYdck5GMCGzXTuwKfePWQYViNs4avKpnUbrwfQ