/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var SetIdentity = require('./SetIdentity');

/**
 * Loads an identity matrix into the view matrix.
 *
 * @method Phaser.Renderer.WebGL.MVP.ViewIdentity
 * @since 3.25.0
 *
 * @param {Phaser.Renderer.WebGL.Pipelines.ModelViewProjection} model - The Model View Projection object.
 *
 * @return {Phaser.Renderer.WebGL.Pipelines.ModelViewProjection} The Model View Projection object.
 */
var ViewIdentity = function (model)
{
    SetIdentity(model.viewMatrix);
};

module.exports = ViewIdentity;
