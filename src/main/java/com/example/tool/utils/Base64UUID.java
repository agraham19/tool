package com.example.tool.utils;

import org.apache.commons.codec.binary.Base64;
import java.nio.ByteBuffer;
import java.util.UUID;

// taken from https://github.com/UKHomeOffice/hocs-info-service/
public class Base64UUID
{
    private Base64UUID() {}

    public static String uuidToBase64String(UUID uuid) {
        ByteBuffer uuidBytes = ByteBuffer.wrap(new byte[16]);
        uuidBytes.putLong(uuid.getMostSignificantBits());
        uuidBytes.putLong(uuid.getLeastSignificantBits());
        return Base64.encodeBase64URLSafeString(uuidBytes.array());
    }

}
