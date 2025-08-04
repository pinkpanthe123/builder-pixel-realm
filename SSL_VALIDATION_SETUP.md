# 🔒 PositiveSSL Validation Setup for cashyte.com

## 📁 Required Folder Structure in Plesk

Create the following folder structure in your Plesk file manager:

```
public_html/
├── .well-known/
│   └── pki-validation/
│       └── AC3D013D8DD5F3D608445DB78CA1B2ED.txt
```

## 📋 Step-by-Step Instructions

### 1. Access Plesk File Manager
- Log into your Plesk control panel
- Go to **Files** → **File Manager**
- Navigate to your domain's `public_html` folder

### 2. Create Folder Structure
```bash
# Create .well-known folder
mkdir .well-known

# Navigate into .well-known
cd .well-known

# Create pki-validation folder
mkdir pki-validation
```

### 3. Upload Validation File
- Go to `public_html/.well-known/pki-validation/`
- Upload the file: `AC3D013D8DD5F3D608445DB78CA1B2ED.txt`
- File content should be the validation string provided by PositiveSSL

### 4. Set Correct Permissions
```bash
# Set folder permissions
chmod 755 .well-known
chmod 755 .well-known/pki-validation

# Set file permissions  
chmod 644 .well-known/pki-validation/AC3D013D8DD5F3D608445DB78CA1B2ED.txt
```

## 🌐 Validation URLs

After setup, these URLs should be accessible:

- `http://cashyte.com/.well-known/pki-validation/AC3D013D8DD5F3D608445DB78CA1B2ED.txt`
- `http://www.cashyte.com/.well-known/pki-validation/AC3D013D8DD5F3D608445DB78CA1B2ED.txt`

## ✅ Testing Validation

Test the URLs in your browser to ensure they load correctly:

```bash
# Test non-www
curl http://cashyte.com/.well-known/pki-validation/AC3D013D8DD5F3D608445DB78CA1B2ED.txt

# Test www
curl http://www.cashyte.com/.well-known/pki-validation/AC3D013D8DD5F3D608445DB78CA1B2ED.txt
```

Both should return the validation content without any HTML wrapper.

## 🚀 After Validation

Once PositiveSSL validates successfully:
1. The certificate will be issued
2. You can install it in Plesk SSL/TLS settings
3. Enable force HTTPS redirect
4. Update any hardcoded HTTP links to HTTPS

## 📝 Notes

- Keep the validation file until SSL is fully activated
- Ensure your server serves the file as plain text (not HTML)
- The file must be accessible via HTTP (not HTTPS) during validation
