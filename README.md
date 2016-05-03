CKEditor 4
==========
This is the Texas Tribune's dev version of CKEditor used for a minimalist editor
within the Django Admin.

We're currently giving it a test drive on our flat pages.

It includes a custom TT plugin for auto-linking politicians to their directory pages. If you want to test the
plugin, you'll need to run this editor instance on a simple server and proxy the port to domain name that
ends in .texastribune.org.

## Documentation

The Texas Tribune CKeditor wiki is available at: https://wiki.texastribune.org/x/OI0c.

The full editor documentation is available online at the following address:
http://docs.ckeditor.com

## Deployment
We're serving the editor source from our CDN bucket
on S3, which various templates connect to. Jenkins will automatically deploy changes to the master branch to the CDN bucket, and they will therefore be immediately(ish) effective on the production system, so be careful when uploading changes!
